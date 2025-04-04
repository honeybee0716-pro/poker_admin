// @mui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// types
import { IRole } from 'src/types';
// components
import Iconify from 'src/components/iconify';
import { ConfirmDialog } from 'src/components/custom-dialog';
//
import RoleQuickEditForm from './role-quick-edit-form';

// ----------------------------------------------------------------------

type Props = {
  selected: boolean;
  row: IRole;
  getList: () => void;
  onSelectRow: VoidFunction;
  onDeleteRow: VoidFunction;
};

export default function UserTableRow({ row, selected, getList, onSelectRow, onDeleteRow }: Props) {
  const { id, label, fee, type } = row;

  const confirm = useBoolean();

  const quickEdit = useBoolean();

  return (
    <>
      <TableRow hover selected={selected}>
        <TableCell sx={{ whiteSpace: 'nowrap' }}>{id}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{label}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{fee}</TableCell>

        <TableCell sx={{ whiteSpace: 'nowrap' }}>{type}</TableCell>

        <TableCell align="right" sx={{ px: 1, whiteSpace: 'nowrap' }}>
          <Tooltip title="Edit" placement="top" arrow>
            <IconButton
              color="info"
              disabled={type === 'player'}
              onClick={quickEdit.onTrue}
            >
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          </Tooltip>

          {/* <IconButton
            color="error"
            onClick={() => {
              confirm.onTrue();
            }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
          </IconButton> */}
        </TableCell>
      </TableRow>

      <RoleQuickEditForm
        currentRow={row}
        getList={getList}
        open={quickEdit.value}
        onClose={quickEdit.onFalse}
      />

      <ConfirmDialog
        open={confirm.value}
        onClose={confirm.onFalse}
        title="Delete"
        content="Are you sure want to delete?"
        action={
          <Button variant="contained" color="error" onClick={onDeleteRow}>
            Delete
          </Button>
        }
      />
    </>
  );
}
